import { Col, Row } from "reactstrap";
import { useSelector } from "react-redux";
// import DisplayCard from './DisplayCard';
import AnimatedDisplayCard from "./AnimatedDisplayCard";
import { selectFeaturedCampsite } from '../campsites/campsitesSlice';
import { selectFeaturedPartner } from "../partners/partnersSlice";
import { selectFeaturedPromotion } from '../promotions/promotionsSlice';

const DisplayList = () => {
    const items = useSelector((state) => [
        selectFeaturedCampsite(state),
        selectFeaturedPromotion(state),
        selectFeaturedPartner(state)
    ]);

    console.log('display items:', items);

    return(
        <Row>
            {items.map((item,idx) => {
                return(
                    item && (
                        <Col md className="m-1" key={idx}>
                            <AnimatedDisplayCard item={item} />
                        </Col>
                    )
                );
            })}
            <Col md className="m-1">
                <AnimatedDisplayCard item={selectFeaturedPartner()}/>
            </Col>
        </Row>
    )
}

export default DisplayList;