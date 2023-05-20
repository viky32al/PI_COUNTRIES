import style from "./SmallCountry.module.css"

export const SmallCountry = ({name, image, id}) => {

    return (
        <div>
            <div>
                 
                <img className={style.imgContainer}src={image}/>
                <p className={style.text}>{name}</p>
                <p>{id}</p>

    
                
            </div>
        </div>
    )
}

    
