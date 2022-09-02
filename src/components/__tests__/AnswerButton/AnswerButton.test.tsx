import React from 'react'
import renderer from 'react-test-renderer'
import { AnswerButton } from '../../AnswerButton'

function toJson(component: renderer.ReactTestRenderer) {
  const result = component.toJSON()
  expect(result).toBeDefined()
  expect(result).not.toBeInstanceOf(Array)
  return result as renderer.ReactTestRendererJSON
}

test('create AnswerButton', () => {
  const component = renderer.create(
    <AnswerButton answer="resposta" index={1} />
  )
  let tree = toJson(component)
  expect(tree).toMatchSnapshot()

  // re-rendering
  tree = toJson(component)
  expect(tree).toMatchSnapshot()
})