import Card from 'react-bootstrap/Card';
import classes from './Description.module.css'

const InformationCard = ({imgPath, organizationName, isStudentOrganization, redirectLink}) => {

    return (
        <Card
            style={{width: '18rem', borderRadius: '2em', height: '20rem'}}
            className={classes.card}
        >
            <Card.Header/>
            <Card.Img variant="top" src={imgPath} className="w-50 mx-auto mt-2"/>
            <Card.Body className="text-center">
                <Card.Title
                >{organizationName}</Card.Title>

            </Card.Body>
            <Card.Footer className={classes.cardFooter}>
                {isStudentOrganization ? <a href={redirectLink}>
                        <small className="text-muted">Click for more details</small></a> :
                    <small className="text-muted">Tap to see more details</small>}
            </Card.Footer>
        </Card>
    );
}
export default InformationCard;