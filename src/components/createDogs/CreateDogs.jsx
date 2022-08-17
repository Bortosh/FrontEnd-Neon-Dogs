import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemper, postDogs } from "../../actions";
import { validation } from './Errors';
import { useNavigate } from 'react-router-dom'
import style from './CreateDogs.module.css'

export default function CreateDogs() {
    
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const allTempers = useSelector((e) => e.temper);

    const [input, setInput] = useState({
        name: '',
        minHeight: '',
        maxHeight: '',
        minWeight: '',
        maxWeight: '',
        minlife_span: '',
        maxlife_span: '',
        image: '',
        temperament: [],
        createInDb: false
    });

    const [errors, setErrors] = useState({});
    // console.log("🚀 ~ file: CreateDogs.jsx ~ line 27 ~ CreateDogs ~ errors", errors)
    const [disable, setDisable] = useState(true);

    // console.log('rogelio', Object.values(errors).length)

    useEffect(() => {
        dispatch(getTemper());
    }, [dispatch])

    useEffect(() => {
        if(Object.values(errors).length === 0) {
            setDisable(false)
        }else {
            setDisable(true)
        }
    },[errors])

    function handleSubmit(e) {
        e.preventDefault();
        let create = {
            name: input.name,
            height: `${input.minHeight} - ${input.maxHeight}`,
            weight: `${input.minWeight} - ${input.maxWeight}`,
            life_span: `${input.minlife_span} - ${input.maxlife_span} years`,
            image: input.image,
            temperament: input.temperament.join(', '),
        };

        if(!create.name || !create.height || !create.weight || !create.life_span || !create.temperament || !create.image) {
            alert('aun falta informacion 😭')
        }else {
            dispatch(postDogs(create));
            setInput({
            name: "",
            minHeight: "",
            maxHeight: "",
            minWeight: "",
            maxWeight: "",
            minlife_span: "",
            maxlife_span: "",
            image: "",
            temperament: [],
            createdInBd: true,
        });
        alert('Success!!, Now be responsible! 😊')
        navigate('/home')
    }
}

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
        setErrors(
            validation({
                ...input,
                [e.target.name]: e.target.value
            })
        )
    }

    function handleSelectTemper(e) {
        if(!input.temperament.includes(e.target.value)) {
            setInput({
                ...input,
                temperament: [...input.temperament, e.target.value]
            });
        }
    }

    function handleDelete(e) {
        e.preventDefault();
        setInput({
            ...input,
            temperament: input.temperament.filter(item => item !== e.target.innerText)
        })
    }

    return(
        <div>
            <h2 className={style.h3}>
                <span className={style.span10}>Create Dog</span>
            </h2>
            <div>
                <form className={style.form}>
                    <label>
                        <em>Name:</em>
                        <input
                        className={style.input}
                        type='text'
                        placeholder="Dog Breed"
                        name="name"
                        value={input.name}
                        onChange={(e) => handleChange(e)}/>
                    </label>
                    <strong className={style.strong}>{errors.name}</strong>

                    <label>
                        <em>Height min:</em>
                        <input 
                        className={style.input}
                        type='number'
                        placeholder="Centimeters"
                        name="minHeight"
                        value={input.minHeight}
                        onChange={(e) => handleChange(e)}/>
                    </label>
                    <strong className={style.strong}>{errors.minHeight}</strong>
                    
                    <label>
                        <em>Height max:</em>
                        <input 
                        className={style.input}
                        type="number" 
                        placeholder="Centimeters"
                        name="maxHeight"
                        value={input.maxHeight}
                        onChange={(e) => handleChange(e)}/>
                    </label>
                    <strong className={style.strong}>{errors.maxHeight}</strong>
                    
                    <label>
                        <em>Weight min:</em>
                        <input 
                        className={style.input}
                        type="number" 
                        placeholder="Kilograms"
                        name="minWeight"
                        value={input.minWeight}
                        onChange={(e) => handleChange(e)}/>
                    </label>
                    <strong className={style.strong}>{errors.minWeight}</strong>

                    <label>
                        <em>Weight max:</em>
                        <input 
                        className={style.input}
                        type="number" 
                        placeholder='Kilograms'
                        name="maxWeight"
                        value={input.maxWeight}
                        onChange={(e) => handleChange(e)}/>
                    </label>
                    <strong className={style.strong}>{errors.maxWeight}</strong>

                    <label>
                        <em>Life span min:</em>
                        <input 
                        className={style.input}
                        type="number" 
                        placeholder='Years'
                        name="minlife_span"
                        value={input.minlife_span}
                        onChange={(e) => handleChange(e)}/>
                    </label>
                    <strong className={style.strong}>{errors.minlife_span}</strong>

                    <label>
                        <em>Life span max:</em>
                        <input 
                        className={style.input}
                        type='number'
                        placeholder='Years'
                        name="maxlife_span"
                        value={input.maxlife_span}
                        onChange={(e) => handleChange(e)}/>
                    </label>
                    <strong className={style.strong}>{errors.maxlife_span}</strong>

                    <label>
                        <em>Image:</em>
                    </label>
                        <input 
                        className={style.input}
                        type='text'
                        placeholder='URL'
                        name="image"
                        value={input.image}
                        onChange={(e) => handleChange(e)}
                    />

                    <label className={style.label}>Temperament:</label>
                    <select className={style.select} onChange={(e) => handleSelectTemper(e)}>
                        <option className={style.option}>Tempers</option>
                        {
                            allTempers && allTempers.map(({id, name}) => (
                                <option key={id} value={name}>
                                    {name}
                                </option>
                            ))
                        }
                    </select>
                    {
                        input.temperament.map((name, index) => {
                            return (
                                <div key={index}>
                                    <span>
                                        <button onClick={(name)=> handleDelete(name)}>
                                            {name} 
                                        </button>
                                    </span>
                                </div>
                            )
                        })
                    }
                </form>
                <div className={style.divbtn}>
                    <button
                        disabled={disable}
                        type="submit"
                        onClick={(e) => handleSubmit(e)}
                        className={style.btn}
                        ><span className={style.span}>
                            Create
                        </span>
                        <i></i>
                    </button>
                </div>
            </div>
        </div>
    )
}