import React from 'react';

class Background extends React.Component<any, any> {
    static defaultProps = {
        className: '',
    };

    static isParallaxBackground = true;

    render(): JSX.Element {
        const { className, children } = this.props;
        return <div className={`react-parallax-background ${className}`}>{children}</div>;
    }
}

export default Background;
