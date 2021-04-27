import './card_model.css'

const Card_model = ({title,body,id}) => {
    const style = {
        color: 'red',
        
      };
    return ( 
        <div className="model">
            <div className="info">
                <p style={style}>title:{title}</p>
                <p style={{color:'blue',fontSize:10}}>body:{body}</p>
                <p>id:{id}</p>
            </div>
        </div>
     );
}
 
export default Card_model;