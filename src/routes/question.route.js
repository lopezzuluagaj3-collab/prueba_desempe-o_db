import { Router } from 'express'
import {getQuestions, createQuestionRequest} from '../controlles/question.controller.js'

const router = Router()

// Endpoint temporal para probar insercion sin enviar body.
router.post('/', createQuestionRequest)
router.get('/', getQuestions)

export default router
