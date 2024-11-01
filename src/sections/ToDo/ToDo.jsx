import { useState } from "react"

const ToDo = () => {
    const [inputValue, setInputValue] = useState('')
    const [orignalArr, setOriginalArr] = useState([]);

    const handleInput = (e) => {
        e.preventDefault();
        setInputValue(e.target.value)
        // console.log('myvalue', e.target.value)   
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setOriginalArr([...orignalArr, inputValue])
        setInputValue('')
    }

    const handleDelete = (index) =>{
        index.preventDefault();
    }
    const handleDelete = (index) =>{
        index.preventDefault();
    }
    return (
        <>
            <div>
                <h1 className="text-2xl">hello harry potter</h1>
                <br />
                <form action="submit" onSubmit={handleSubmit}>
                    <input type="text" placeholder="type anything" className="bg-transparent rounded border-white border py-1 px-4 text-2xl"
                        value={inputValue}
                        onChange={handleInput}
                    />

                    <br />
                    <br />

                    <button type="submit" className="bg-green-500 py-2 px-4 rounded">See Magic</button>
                </form>


                <br />
                <div>
                    <h1 className="text-3xl text-gray-500">harry Notes is here</h1>

                    <div className="">
                        {
                            orignalArr.map((item, index) => (
                                <p key={index}><span>{index + 1}. {item}</span>
                                    <span onClick={handleDelete}>Delete</span>
                                    <span onClick={handleEdit}>Edit (-_-)</span>
                                </p>)
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ToDo;
