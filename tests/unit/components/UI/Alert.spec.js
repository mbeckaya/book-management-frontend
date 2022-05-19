import { shallowMount } from '@vue/test-utils'
import Alert from '@/components/UI/Alert'

describe('Alert component', () => {
    it('should renders', () => {
        const wrapper = shallowMount(Alert, {
            props: {
                message: 'This is a successful message',
                variant: 'success'
            }
        })
        expect(wrapper.text()).toBe('This is a successful message')
        expect(wrapper.classes()).toContain('alert-success')
    })
})