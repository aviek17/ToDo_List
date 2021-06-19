import React, {useState} from "react"
import Lists from "./Lists"

const Todo = () => {
    const [item, setItem] = useState("")
    const [inputItem, setInputItem]  = useState([])

    const inputItemList = (event) => {
        setItem(event.target.value)
    }


    const addItem = () => {
        setInputItem((preValue) => {
            return ([...preValue,item]);
        })
        setItem("")
    }


    const deleteItems = (id) => {
        console.log("Clicked");
        setInputItem((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return (index!==id)
            })
        })
    }

    return (
        <>
        <div className="main_div">
            <div className="center_div">
                <br/>
                <h1>ToDo List</h1>
                <br/>
                <input type="text" placeholder="Add an Item"  onChange={inputItemList}  value={item}/>
                <button  onClick={addItem}> + </button>

                <ol>
                        {   
                            inputItem.map((itemList , index) => {
                                {/* return <li>{itemList}</li> */}
                                    return <Lists   text = {itemList}
                                        id={index}
                                        key={index}
                                        onSelect={deleteItems}
                                    />
                            })

                        }
                </ol>


            </div>

        </div>
        </>
    )
}

export default Todo;