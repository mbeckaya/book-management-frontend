import { shallowMount } from '@vue/test-utils'
import BookForm from '@/components/Book/BookForm'

describe('BookForm component', () => {
    it('should renders on create mode', () => {
        const wrapper = shallowMount(BookForm, {
            props: {
                mode: 'create'
            }
        })
        expect(wrapper.text()).toContain('Create a book')
        expect(wrapper.find('#title').isVisible()).toBe(true)
        expect(wrapper.find('#author').isVisible()).toBe(true)
        expect(wrapper.find('#publisher').isVisible()).toBe(true)
        expect(wrapper.find('#price').isVisible()).toBe(true)
        expect(wrapper.find('#pages').isVisible()).toBe(true)
        expect(wrapper.find('#yesHandback').isVisible()).toBe(true)
        expect(wrapper.find('#noHandback').isVisible()).toBe(true)
        expect(wrapper.find('#yesPaperback').isVisible()).toBe(true)
        expect(wrapper.find('#noPaperback').isVisible()).toBe(true)
        expect(wrapper.find('button').text()).toContain('Save')
    })

    it('should renders on edit mode', () => {
        const mockRoute = {
            params: {
                id: 1
            }
        }
        const mockRouter = {
            push: jest.fn()
        }

        const wrapper = shallowMount(BookForm, {
            props: {
                mode: 'edit'
            },
            global: {
                mocks: {
                    $route: mockRoute,
                    $router: mockRouter
                }
            }
        })

        expect(wrapper.text()).toContain('Edit a book')
    })
})