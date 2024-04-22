import { Router } from 'express'
const router = Router()


router.get('/', (req, res)=> {
    res.render("index", { title: 'First website with node'})
})

router.get('/contact', (req, res)=> {
    res.render("contact", { title: 'Contact me'})
})

router.get('/about', (req, res)=> {
    res.render("about", { title: 'About me'})
})

export default router