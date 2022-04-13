import React from "react";

import {
  getRelativePosition,
  getSplitChildren,
  getHasDynamicBlur,
  getBlurValue,
} from "./parallaxUtils";
import { getNodeHeight, canUseDOM, isScrolledIntoView } from "./dom";
import ParallaxChildren from "./ParallaxChildren";

const initialStyle = {
  position: "absolute",
  left: "50%",
  WebkitTransform: "translate3d(-50%, 0, 0)",
  transform: "translate3d(-50%, 0, 0)",
  WebkitTransformStyle: "preserve-3d",
  WebkitBackfaceVisibility: "hidden",
  MozBackfaceVisibility: "hidden",
  MsBackfaceVisibility: "hidden",
};

class Parallax extends React.Component<any, any> {
  //   bg: HTMLDivElement;

  //   canUseDOM: boolean;

  //   contentHeight: number;

  //   contentWidth: number;

  //   node: HTMLElement;

  //   content: HTMLElement;

  //   img: HTMLImageElement;

  //   bgImageLoaded: boolean;

  //   bgImageRef: HTMLImageElement;

  //   parent: HTMLElement | Document;

  //   parentHeight: number;

  //   timestamp: number;

  //   isDynamicBlur: boolean;

  static defaultProps = {
    bgClassName: "react-parallax-bgimage",
    bgImageAlt: "",
    className: "",
    contentClassName: "",
    disabled: false,
    strength: 100,
  };
  canUseDOM: boolean;
  node: any;
  content: any;
  bgImageLoaded: boolean;
  bgImageRef: any;
  parent: any;
  parentHeight: number;
  timestamp: number;
  isDynamicBlur: boolean;
  contentWidth: any;
  contentHeight: any;
  img: any;
  bg: any;

  constructor(props: any) {
    super(props);

    this.state = {
      bgImage: props.bgImage,
      bgImageSrcSet: props.bgImageSrcSet,
      bgImageSizes: props.bgImageSizes,
      imgStyle: initialStyle,
      bgStyle: {
        ...initialStyle,
        ...props.bgStyle,
      },
      percentage: 0,
      splitChildren: getSplitChildren(props),
    };

    this.canUseDOM = canUseDOM();

    this.node = null;
    this.content = null;
    this.bgImageLoaded = false;
    this.bgImageRef = undefined;

    this.parent = props.parent;
    this.parentHeight = getNodeHeight(this.canUseDOM, this.parent);
    this.timestamp = Date.now();
    this.isDynamicBlur = getHasDynamicBlur(props.blur);
  }

  /**
   * bind some eventlisteners for page load, scroll and resize
   * save component ref after rendering, update all values and set static style values
   */
  componentDidMount(): void {
    const { parent } = this.props;
    const { bgImage, bgImageSrcSet, bgImageSizes } = this.state;

    this.parent = parent || document;
    this.addListeners();
    // ref to component itself

    if (bgImage) {
      this.loadImage(bgImage, bgImageSrcSet, bgImageSizes);
    } else {
      this.updatePosition();
    }
  }

  static getDerivedStateFromProps(props: any): {
    splitChildren: any;
  } {
    return {
      splitChildren: getSplitChildren(props),
    };
  }

  componentDidUpdate(prevProps: any): void {
    const { parent, bgImage, bgImageSrcSet, bgImageSizes } = this.props;
    const { bgImage: stateBgImage } = this.state;

    if (prevProps.parent !== parent) {
      this.removeListeners(this.parent);
      this.parent = parent;
      if (parent) {
        this.addListeners();
      }
    }

    this.parentHeight = getNodeHeight(this.canUseDOM, this.parent);

    if (stateBgImage !== bgImage) {
      this.loadImage(bgImage, bgImageSrcSet, bgImageSizes);
    }
  }

  /**
   * remove all eventlisteners before component is destroyed
   */
  componentWillUnmount(): void {
    this.removeListeners(this.parent);
    this.releaseImage();
  }

  /**
   * update window height and positions on window resize
   */
  onWindowResize = (): void => {
    this.parentHeight = getNodeHeight(this.canUseDOM, this.parent);
    this.updatePosition();
  };

  onWindowLoad = (): void => {
    this.updatePosition();
  };

  onScroll = (): void => {
    if (!this.canUseDOM) {
      return;
    }
    const stamp = Date.now();
    if (
      stamp - this.timestamp >= 10 &&
      isScrolledIntoView(this.node, 100, this.canUseDOM)
    ) {
      window.requestAnimationFrame(this.updatePosition);
      this.timestamp = stamp;
    }
  };

  onContentMount = (content: HTMLElement): void => {
    this.content = content;
  };

  setBackgroundPosition(percentage: number): void {
    const { disabled, strength } = this.props;
    // don't do unneccessary style processing if parallax is disabled
    if (disabled === true) {
      return;
    }

    const { bgStyle } = this.state;
    const inverse = strength < 0;
    const pos = (inverse ? strength : 0) - strength * percentage;
    const transform = `translate3d(-50%, ${pos}px, 0)`;

    this.setState({
      bgStyle: {
        ...bgStyle,
        WebkitTransform: transform,
        transform,
      },
      percentage,
    });
  }

  /**
   * sets position for the background image
   */
  setImagePosition(percentage: number, autoHeight = false): void {
    const { disabled, strength, blur } = this.props;
    const height = autoHeight ? "auto" : `${this.getImageHeight()}px`;
    const width = !autoHeight ? "auto" : `${this.contentWidth}px`;

    // don't do unneccessary style processing if parallax is disabled
    if (disabled === true) {
      return;
    }

    const { imgStyle } = this.state;
    const inverse = strength < 0;
    const pos = (inverse ? strength : 0) - strength * percentage;

    const transform = `translate3d(-50%, ${pos}px, 0)`;
    let filter = "none";
    if (blur) {
      filter = `blur(${getBlurValue(this.isDynamicBlur, blur, percentage)}px)`;
    }

    this.setState({
      imgStyle: {
        ...imgStyle,
        height,
        width,
        WebkitTransform: transform,
        transform,
        WebkitFilter: filter,
        filter,
      },
      percentage,
    });
  }

  /**
   * The image height depends on parallax direction. If strength value is negative we have to give it more height
   * so there is no white space at start/end of container visiblility.
   */
  getImageHeight(): number {
    const { strength } = this.props;
    const inverse = strength < 0;
    const factor = inverse ? 2.5 : 1;
    const strengthWithFactor = factor * Math.abs(strength);
    return Math.floor(this.contentHeight + strengthWithFactor);
  }

  /**
   * updates scroll position of this component and also its width and height.
   * defines, if the background image should have autoHeight or autoWidth to
   * fit the component space optimally
   */
  updatePosition = (): void => {
    if (!this.content) {
      return;
    }
    let autoHeight = false;
    this.contentHeight = this.content.getBoundingClientRect().height;
    this.contentWidth = this.node.getBoundingClientRect().width;

    // set autoHeight or autoWidth
    if (
      this.img &&
      this.img.naturalWidth / this.img.naturalHeight <
        this.contentWidth / this.getImageHeight()
    ) {
      autoHeight = true;
    }

    // get relative scroll-y position of parallax component in percentage
    const percentage = getRelativePosition(this.node, this.canUseDOM);
    const hasBgImage = !!this.img;
    const hasBgChildren =
      this.bg && this.state.splitChildren.bgChildren.length > 0;

    // update bg image position if set
    if (hasBgImage) {
      this.setImagePosition(percentage, autoHeight);
    }
    // update position of Background children if exist
    if (hasBgChildren) {
      this.setBackgroundPosition(percentage);
    }

    // be sure to set the percentage if neither image nor bg component was set
    if (!hasBgImage && !hasBgChildren) {
      this.setState({ percentage });
    }
  };

  /**
   * Makes sure that the image was loaded before render
   */
  loadImage(bgImage: any, bgImageSrcSet: any, bgImageSizes: any): void {
    this.releaseImage();
    this.bgImageRef = new Image();
    this.bgImageRef.onload = () => {
      this.setState(
        {
          bgImage,
          bgImageSrcSet,
          bgImageSizes,
        },
        () => this.updatePosition()
      );
    };
    this.bgImageRef.onerror = this.bgImageRef.onload;
    this.bgImageRef.src = bgImage;
    this.bgImageRef.srcset = bgImageSrcSet || "";
    this.bgImageRef.sizes = bgImageSizes || "";
  }

  /**
   * Unbind eventlistener of bg image and delete it
   */
  releaseImage(): void {
    if (this.bgImageRef) {
      this.bgImageRef.onload = null;
      this.bgImageRef.onerror = null;
      delete this.bgImageRef;
    }
  }

  addListeners(): void {
    if (this.canUseDOM && this.parent) {
      this.parent.addEventListener("scroll", this.onScroll, false);
      window.addEventListener("resize", this.onWindowResize, false);
      window.addEventListener("load", this.onWindowLoad, false);
    }
  }

  removeListeners(parent?: HTMLElement | Document): void {
    if (this.canUseDOM) {
      if (parent) {
        parent.removeEventListener("scroll", this.onScroll, false);
      }
      window.removeEventListener("resize", this.onWindowResize, false);
      window.removeEventListener("load", this.onWindowLoad, false);
    }
  }

  render(): JSX.Element {
    const {
      className,
      style,
      bgClassName,
      contentClassName,
      bgImageAlt,
      renderLayer,
      bgImageStyle,
    } = this.props;
    const {
      bgImage,
      bgImageSrcSet,
      bgImageSizes,
      percentage,
      imgStyle,
      bgStyle,
      splitChildren,
    } = this.state;
    return (
      <div
        className={`react-parallax ${className}`}
        style={{ position: "relative", overflow: "hidden", ...style }}
        ref={(node) => {
          this.node = node;
        }}
      >
        {bgImage ? (
          <img
            className={bgClassName}
            src={bgImage}
            srcSet={bgImageSrcSet}
            sizes={bgImageSizes}
            ref={(bg) => {
              this.img = bg;
            }}
            alt={bgImageAlt}
            style={{ ...imgStyle, ...bgImageStyle }}
          />
        ) : null}
        {renderLayer ? renderLayer(-(percentage - 1)) : null}
        {splitChildren.bgChildren.length > 0 ? (
          <div
            className="react-parallax-background-children"
            ref={(bg) => {
              this.bg = bg;
            }}
            style={bgStyle}
          >
            {splitChildren.bgChildren}
          </div>
        ) : null}
        <ParallaxChildren
          onMount={this.onContentMount}
          className={contentClassName}
        >
          {splitChildren.children}
        </ParallaxChildren>
      </div>
    );
  }
}

export default Parallax;
