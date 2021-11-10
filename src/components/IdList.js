import id from "../data/data.json";
import IdCard from "./IdCard";

function IdList() {
    return (

        <div>
            {id.map((currentIdObj) => (
                <div>
                    <IdCard
                        picture={currentIdObj.picture}
                        firstName={currentIdObj.firstName}
                        lastName={currentIdObj.lastName}
                        gender={currentIdObj.gender}
                        height={currentIdObj.height}
                        birth={currentIdObj.birth}
                    />
                </div>
            ))}
        </div>
    );
}

export default IdList;