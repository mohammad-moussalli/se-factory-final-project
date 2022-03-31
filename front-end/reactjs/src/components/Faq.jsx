import { useEffect, useState} from 'react'
import axios from 'axios';
import Spinner from './Spinner';
import '../style/faqs.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
            <div className='faq-component'>

                <div className='faq-component-header'>
                    <p className='faq-component-title'>Frequently Asked Question</p>
                    <p className='faq-component-subtitle'>Check our FAQ page for some common questions or email us at apply@kaffi-lb.org</p>
                </div>

                <div className='faq-component-category-buttons'>
                    {FaqCategories.map((FaqCategory)=> {
                    return <button className='faq-component-button' key={FaqCategory.id} onClick={() => getCategoryFaqs(FaqCategory.id)}>{FaqCategory.category}</button>
                    })}
                </div>
                <div>
                    {Array.isArray(CategoryFaqs) && CategoryFaqs.map((CategoryFaq) => {
                        return(
                            <div className='accordion'>
                                <Accordion>
                                    <AccordionSummary className="accordion-summary" expandIcon={<ExpandMoreIcon />} aria-controls={`panel${CategoryFaq.id}a-content`} id={`panel${CategoryFaq.id}a-header`}>
                                        <Typography className="faq-component-questions">{CategoryFaq.question}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails className="accordion-details">
                                        <Typography className="faq-component-answers">{CategoryFaq.answer}</Typography>
                                    </AccordionDetails>
                                </Accordion> 
                            </div> 
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Faq