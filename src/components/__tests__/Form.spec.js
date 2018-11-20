import Form from '../Form.vue'
import { shallowMount } from '@vue/test-utils'

describe('Form.vue', () => {
	test('emits form-submitted when form is submitted', () => {
		const wrapper = shallowMount(Form)
		wrapper.find('button').trigger('submit')
		expect(wrapper.emitted('form-submitted')).toHaveLength(1)
	})
})