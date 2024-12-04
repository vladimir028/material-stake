import Card from 'react-bootstrap/Card';
import classes from "./HomePageCard.module.css"

const HomePageCard = ({imgUrl, mainText, subText}) => {
    return (
        <>
            <Card
                bg='light'
                text='dark'
                className={classes.informationCard}
            >
                <img alt='/' src={imgUrl} className={classes.cardImage}></img>
                <Card.Body className={classes.cardBody}>
                    <Card.Title
                        className={classes.cardTitle}
                    >{mainText}</Card.Title>
                    <Card.Text
                        className={classes.cardText}>
                        {subText}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

export default HomePageCard;