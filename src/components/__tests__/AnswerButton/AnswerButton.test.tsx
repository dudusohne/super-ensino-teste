import renderer from 'react-test-renderer'
import { AnswerButton } from '../../AnswerButton'
import React from 'react'

function toJson(component: renderer.ReactTestRenderer) {
  const result = component.toJSON()
  expect(result).toBeDefined()
  expect(result).not.toBeInstanceOf(Array)
  return result as renderer.ReactTestRendererJSON
}

test('create AnswerButton', () => {
  const component = renderer.create(
    <AnswerButton answer="resposta" />,
  )
  let tree = toJson(component)
  expect(tree).toMatchSnapshot()

  // re-rendering
  tree = toJson(component)
  expect(tree).toMatchSnapshot()
})