import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, {useEffect, useState} from "react";
import CardDetails from "./CardDetails";
import useSetSubject from "../../hooks/useSetSubject";
import Swal from "sweetalert2"
import classes from "./CardComponent.module.css"
import useAuthStatus from "../../hooks/useAuthStatus";


const replaceProgramNames = (str) => {
    if (str === undefined)
        return str
    str = str.replaceAll("Примена на информациски технологии", "ПИТ");
    str = str.replaceAll("Софтверско инженерство и информациски системи", "СИИС");
    str = str.replaceAll("Интернет, мрежи и безбедност", "ИМБ");
    str = str.replaceAll("Software engineering and information systems", "SEIS");
    str = str.replaceAll("Компјутерски науки", "КН");
    str = str.replaceAll("Компјутерско инженерство", "КИ");
    str = str.replaceAll("Информатичка едукација", "ИЕ");
    str = str.replaceAll("Стручни студии за програмирање", "ССП");
    str = str.replaceAll("Управување во информатички технологии", "УИТ");
    str = str.replaceAll("Биоинформатика", "БИ");
    str = str.replaceAll("Безбедност, криптографија и кодирање", "БКК");
    str = str.replaceAll("Статистика и аналитика на податоци", "САП");
    str = str.replaceAll("Софтверско инженерство", "СИ");
    str = str.replaceAll("Пресметување во облак", "ПО");

    str = str.replaceAll(",", "");
    const characters = str.split(" ");
    const uniqueCharacters = new Set(characters);
    return Array.from(uniqueCharacters).join(', ');
}


const CardComponent = (props) => {

    const {isLoggedIn, username} = useAuthStatus();
    const [clicked, setClicked] = useState(props.active);
    const [hover, setHover] = useState(false);
    const formData = {
        name: props.subject.name,
        username: username
    };

    const handleClick = () => {
        const nextClicked = !clicked;
        setClicked(nextClicked);

        Swal.fire(
            nextClicked ? "Успешно додаден предмет во материјали" : "Успешно тргнат предмет од материјали",
            nextClicked ? "Со лесно :)" : "Редно беше",
            nextClicked ? "success" : "error"
        ).then(r => r.isConfirmed);

    };

    const handleSubmit = useSetSubject();
    console.log(props.subject.name + "ACTIVE: " + props.active)

    useEffect(() => {
        if (props.active){
            setClicked(true)
        }
    }, [props.active]);

    return (
        <Card
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={`${classes.card} ${hover ? classes.cardHover : classes.cardDefault} ${clicked ? classes.cardScale : ''}`}
        >
            <Card.Body className={classes.cardBody}>
                <div>
                    <Card.Title className={classes.cardTitle}>{props.subject['name']}</Card.Title>
                    <Card.Text className={classes.cardText}>
                        {props.subject['code']}
                        <p>{replaceProgramNames(props.subject['studyProgram'])}</p>
                    </Card.Text>
                </div>
                <div className={classes.cardFooter}>
                    <CardDetails subject={props.subject} setHover={setHover}/>
                    <form onSubmit={(event) => handleSubmit(event, formData)} className={classes.form}>
                        <input type="text" name="name" value={formData.name} hidden/>
                        <div>
                            <Button type="submit"
                                    variant={clicked ? 'danger' : 'secondary'}
                                    onClick={handleClick}>
                                {clicked ? 'Отстрани го!' : 'Земи предмет!'}
                            </Button>
                        </div>
                    </form>
                </div>
            </Card.Body>
        </Card>
    );
}

export default CardComponent;