import React, { useState } from 'react'
import { useEffect } from 'react';
// import { useSelector } from "react-redux";

export const JsonForm = (props) => {
    const { nextSubNodes } = props
    console.log('props', props)
    const [formStructure, setFormStructure] = useState([])
    const jsonForm = nextSubNodes//useSelector((state) => state.botConversation.botConversationalMessages)
    var object = jsonForm && jsonForm[jsonForm.length - 1]

    object && console.log(`jsonForm`, object.application)

    const createForm = () => {
        var values = []
        if (object) {
            for (var i in object.application) {
                console.log("jsonForm", JSON.stringify(i))
                values.push({ name: i, value: object.application[i] })
                // setFormStructure(....formStructure , )                
            }
        }
        console.log("values", values)
        setFormStructure(values)
    }

    useEffect(() => {
        createForm()
    }, [])

    // const mapFields = () => {
    //     // var html = ""
    //     if(object){
    //         for (var i in object.application) {
    //             return <div>
    //                  <label>{i}</label>
    //                  <input type={object[i]} name={i} />
    //              </div>
    //          }
    //     }
    //     // return html
    // }
    // createForm()
    return (
        <div>
            <form className="form">
                {formStructure.map((item) => {
                    return (
                        <div classname="form-input">
                            <label className='form-label'>{item.name}: </label>
                            {item.value === "textarea" ?
                                <textarea  type={item.value} /> : <input type={item.value} />
                            }
                        </div>)
                }
                )}
                <div classname="form-button">
                <button>Submit</button>
                </div>
            </form>

        </div>
    )
}