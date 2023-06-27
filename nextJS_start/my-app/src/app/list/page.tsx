// import Image from "next/image"
// import img from '/public/food0.png';
let product:string[] = ['Tomatoes','Pasta','Coconut'];

const List = () => {
  return (
    <div>
      {
        product.map((item , idx) => {
          return (
            <div className='food' key={idx}>
              <img src={`/food${idx}.png`}
              alt={item} className='food-img'/>
              <h4>{item} $40</h4>
            </div>
          )
        })
      }
    </div>
  );
};

export default List;