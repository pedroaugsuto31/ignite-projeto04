import { AnswerQuestionUseCase } from './answer-question'
import { AnswerRepository } from '../repositories/answer-repository'

const fakeAnswerRepository: AnswerRepository = {
  create: async () => {},
}

test('create an answer', () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswerRepository)

  const answer = answerQuestion.execute({
    questionId: '1',
    instructorId: '1',
    content: 'Nova resposta',
  })

  expect(answer.content).toEqual('Nova resposta')
})
