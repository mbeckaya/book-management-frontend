import { shallowMount } from '@vue/test-utils'
import TableHeadSort from '@/components/UI/TableHeadSort'

describe('TableHeadSort component', () => {
    it('should renders', () => {
        const mockFn = jest.fn()
        const wrapper = shallowMount(TableHeadSort, {
            props: {
                caption: 'Title',
                field: 'title',
                sortBy: 'title',
                orderBy: 'desc',
                handleClick: mockFn
            }
        })
        expect(wrapper.text()).toBe('Title')
        expect(wrapper.find('i').classes()).toContain('bi-sort-down')
    })
})