function IdCard(props) {
    return (
        <div className="content1">
            <div className="content2">
                <div className="img">
                    <img src={props.picture} alt="..." />
                </div>
                <div className="elements">
                    <li>First name: <strong>{props.firstName}</strong></li>
                    <li>Last name:  <strong>{props.lastName}</strong></li>
                    <li>Gender: <strong>{props.gender}</strong></li>
                    <li>Height: <strong>{props.height}</strong></li>
                    <li>Birth: <strong>{props.birth}</strong></li>
                </div>
            </div>
        </div>
    );
}

export default IdCard;
