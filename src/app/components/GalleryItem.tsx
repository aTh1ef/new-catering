import React, { useEffect } from 'react';
import 'glightbox/dist/css/glightbox.min.css'; // Import GLightbox styles
import './galleryItem.css';
import Image from 'next/image';

export default function GalleryItem({
    item,
}: {
    item: {
        id: number;
        image: string;
    };
}) {
    useEffect(() => {
        // Import GLightbox dynamically
        const initLightbox = async () => {
            const GLightbox = (await import('glightbox')).default;
            GLightbox({
                selector: '.gallery-lightbox',
            });
        };

        if (typeof window !== 'undefined') {
            initLightbox();
        }
    }, []);

    return (
        <div className="col-lg-3 col-md-4">
            <div className="galleryItem">
                <a
                    href={item.image}
                    className="gallery-lightbox"
                    data-gall="gallery-item"
                >
                    <Image
                        width={500}
                        height={300}
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                        src={item.image}
                        alt=""
                        className="img-fluid"
                    />
                </a>
            </div>
        </div>
    );
}
