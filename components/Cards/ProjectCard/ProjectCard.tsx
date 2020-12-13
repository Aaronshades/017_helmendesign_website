import React from 'react';

import styles from './ProjectCard.module.css';

interface IProjectCard {
    imageSrc: string;
    imgAlt: string;
    cardTitle: string;
    cardDescription: string;
}

const ProjectCard: React.FC<IProjectCard> = (props) => {
    const { imageSrc, imgAlt, cardTitle, cardDescription } = props;
    return (
        <article className={styles.container}>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={imageSrc} alt={imgAlt} />
            </div>
            <div className={styles.cardInfo}>
                <h3 className={styles.cardTitle}>{cardTitle}</h3>
                <p className={styles.cardDescription}>{cardDescription}</p>
            </div>
        </article>
    )
};

export default ProjectCard;
