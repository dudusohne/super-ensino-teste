import renderer from 'react-test-renderer'
import { QuestionButton } from '../../QuestionButton'
import React from 'react'

function toJson(component: renderer.ReactTestRenderer) {
  const result = component.toJSON()
  expect(result).toBeDefined()
  expect(result).not.toBeInstanceOf(Array)
  return result as renderer.ReactTestRendererJSON
}

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <QuestionButton name="asd" />,
  )
  let tree = toJson(component)
  expect(tree).toMatchSnapshot()

  // re-rendering
  tree = toJson(component)
  expect(tree).toMatchSnapshot()
})