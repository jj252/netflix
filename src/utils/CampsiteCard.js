import {Card, CardImg, CardImgOverlay, CardTitle, Container, Col, Row} from 'reactstrap';
import {Link} from 'react-router-dom';
import style from '../app/shared/StudentList.module.css';

const CampsiteCard = ( campsite ) => {
    console.log('CAMPSITE',campsite);
    console.log('CAMPSITE.prop',campsite.prop.CAMPSITES[0].image);
    const {id, image, name } = campsite;
    
    return (
        <>
        <Container>
            <Row>
                    <Col sm='2'>
                        <Card className={style.card}>
                            <CardImg width='5%' src={campsite.prop.CAMPSITES[0].image} alt={name} />
                            <CardImgOverlay>
                                <CardTitle>{name}</CardTitle>
                            </CardImgOverlay>
                        </Card>
                    </Col>
                    <Col sm='2'>
                        <Card className={style.card}>
                            <CardImg width='5%' src={campsite.prop.CAMPSITES[1].image} alt={name} />
                            <CardImgOverlay>
                                <CardTitle>{name}</CardTitle>
                            </CardImgOverlay>
                        </Card>
                    </Col>
                
            </Row>
        </Container>
        </>
    );
};

export default CampsiteCard;