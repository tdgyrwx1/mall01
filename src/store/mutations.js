import * as types from './mutation-types'

const mutations = {//修改state内容，都要通过mutations
	[types.ADD_TO_CART](state, goods) {
		state.cartList.push(goods)
	},
	[types.INCREMENT_COUNT](state, index) {
		state.cartList[index].count += 1
	}
}


export default mutations
