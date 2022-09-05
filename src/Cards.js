// import Docpatient from "./Doc-and-patient.jpg"

export default function Cards(props) {

  let array=props.data.data
  console.log(array)

  const personList= array.map(element=>{
    {props.loading && <h2>Loading....</h2>}
    return(
      <div className="md:h-80 md:w-72 h-60 w-52 shadow-lg rounded-md p-4 flex flex-col justify-between cursor-pointer mb-4" key={element.id}>
      <img src={element.avatar} alt="Img not found" className="md:h-32 md:w-40 h-24 md:32 self-center"></img>
      <p className=" font-semibold md:text-normal text-sm">First name: {element.first_name}</p>
      <p className=" font-semibold md:text-normal text-sm">Last name: {element.last_name}</p>
      <p className=" text-[#454545] font-semibold md:text-norma text-sm">E-mail: {element.email}</p>
    </div>
    )
  })


  return (
    <div className="grid md:grid-cols-3 md:gap-4 my-16 md:mx-48 mx-16 flex flex-col items-center justify-center" >
      {personList}
    </div>
  )
}