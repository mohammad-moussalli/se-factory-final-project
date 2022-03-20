import { useEffect, useState} from 'react'
import axios from 'axios';
import Spinner from './Spinner';
import Button from "./Button";



const Faq = () => {


    const [FaqCategories, setFaqCategories] = useState(null)
    const [CategoryFaqs, setCategoryFaqs] = useState(null)
    const FaqCategoriesApi = "http://localhost:8080/faq-categories/"
    const CategoryFaqsApi = `http://localhost:8080/faqs/category/`
    
    const getCategoryFaqs = (categoryId => {
        axios.get(CategoryFaqsApi + categoryId)
        .then(response => {
            setCategoryFaqs(response.data)
        }).catch(err => {
            console.log(err)
        })
    })

    useEffect( () => {
        axios.get(FaqCategoriesApi, {headers: {'Access-Control-Allow-Origin': '*'}})
        .then(response => {
            setFaqCategories(response.data)
            getCategoryFaqs(response.data[0].id)})
        .catch(err => {
            console.log(err)
        });
    }, [])



    if (!FaqCategories){
       return <Spinner/>
    } else{
        return (
            <div>
                {FaqCategories.map((FaqCategory)=> {
                return <button key={FaqCategory.id} onClick={() => getCategoryFaqs(FaqCategory.id)}>{FaqCategory.category}</button>
                })}

                <div>
                    {Array.isArray(CategoryFaqs) && CategoryFaqs.map((CategoryFaq) => {
                        return(
                            <div key={CategoryFaq.id}>
                                {CategoryFaq.question}
                                {CategoryFaq.answer}
                            </div>  
                        )
                    })}
                </div>
            </div>
            
        )
    }

}

export default Faq