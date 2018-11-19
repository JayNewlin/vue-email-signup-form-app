import { shallowMount } from '@vue/test-utils'
import Item from '../Item.vue'

describe('Item.vue', () => {
	test('renders item.url', () => {
		const item = {
			url: 10
		}
		const wrapper = shallowMount(Item, {
			propsData: { item }
		})
		expect(wrapper.text()).toContain(item.url)
	})
	test('renders a link to the item.url with item.title as text', () => {
		const item = {
			url: 'http://example.com',
			title: 'some-title'
		}
		const wrapper = shallowMount(Item, {
			propsData: { item }
		})
		const a = wrapper.find('a')
		expect(a.text()).toBe(item.title)
		expect(a.attributes().href).toBe(item.url)
		})
	test('renders item.author', () => {
    	const item = {
      		author: 10
    	}
    	const wrapper = shallowMount(Item, {
      		propsData: { item }
    	})
    	expect(wrapper.text()).toContain(item.author)
  	})
  	test('renders item.score', () => {
  		const item = {
  			score: 10
  		}
  		const wrapper = shallowMount(Item, {
  			propsData: {item}
  		})
  		expect(wrapper.text()).toContain(item.score)
  	})
})
