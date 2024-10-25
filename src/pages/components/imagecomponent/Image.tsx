import React from 'react'

interface ImageProps {
    src: string;
    alt: string;
    width?: string | number;
    height?: string | number;
    borderRadius?: string | number;
}

const Image: React.FC<ImageProps> = ({
    src,
    alt,
    width = '100%',
    height = 'auto',
    borderRadius = '0',
}) => {
    return (
        <img
            src={src}
            alt={alt}
            style={{
                width: width,
                height: height,
                borderRadius: borderRadius,
                objectFit: 'cover',
                margin: '0px',
                padding: '0px'
            }}
        />
    );
};

export default Image;
