import { shallowMount, mount } from '@vue/test-utils'
import AttributeStars from '@/components/AttributeStars.vue'


describe('AttributeStars.vue', () => {
  it('renders rating when passed', () => {
    const rating = 100
    const wrapper = shallowMount(AttributeStars, {
      propsData: { rating }
    })
    expect(wrapper.props().rating).toBe(rating)
    expect(wrapper.props().type).toMatch('text')
    expect(wrapper.props().color).toMatch('#f00')
  })
})

describe('Testing Component Methods', () => { 
  const rating = 100
  let wrapper: any;
  const typeArray = ['sehr gut', 'gut', 'befriedigend','ausreichend','mangelhaft','ungenügend' ]

  beforeEach(() => {
    wrapper = mount(AttributeStars, {
      propsData: { rating }
    })
  });
 
  it("computedText = 'SEHR GUT FOR RATING 100'", () => {
    wrapper.vm.getRatingText();
    expect(wrapper.vm.computedText).toEqual(typeArray[0].toUpperCase());
  });

  it("computedColor = '#739aff'  FOR RATING 100'", () => {
    wrapper.vm.getRatingColor();
    expect(wrapper.vm.computedColor).toEqual('#739aff');
  });

  it("computedScore = '1.0'  FOR RATING 100'", () => {
    wrapper.vm.getGrading();
    expect(wrapper.vm.computedScore).toEqual('1.0');
  }); 
  
  it("updates the .textContent to 'Hi'", done => {
    wrapper.vm.computedText = "sehr gut";   

    // vuejs updates the dom asynchronously
    // wait for the nextTick callback before running the test
    wrapper.vm.$nextTick(() => {
        try {
            expect(wrapper.text()).toBe("AUSZEICHNUNG User Bewertung sehr gut 02/2021");
            done();
        } catch (err) {
            done.fail(err);
        }
    });
});

it("has the expected html structure", () => {
    expect(wrapper.vm.$el).toMatchSnapshot();
});
})
