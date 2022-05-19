import { shallowMount } from '@vue/test-utils'
import Pagination from '@/components/UI/Pagination'

describe('Pagination component', () => {
    it('should renders', () => {
        const mockFn = jest.fn()
        const wrapper = shallowMount(Pagination, {
            props: {
                totalPages: 10, currentPage: 1, previousPage: 0, nextPage: 2, handleClick: mockFn
            }
        })
        expect(wrapper.findAll('button').at(0).text()).toBe('Previous')
        expect(wrapper.findAll('li').at(0).classes()).toContain('disabled')
        expect(wrapper.findAll('li').length).toBe(12)
        expect(wrapper.findAll('li').at(11).text()).toBe('Next')
    })
})