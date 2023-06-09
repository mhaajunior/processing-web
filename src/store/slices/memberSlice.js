import { createSlice } from "@reduxjs/toolkit";

const memberSlice = createSlice({
  name: "memberForm",
  initialState: {
    data: {
      step1: {
        f1: "",
        f2: "",
        f3_1: "",
        f3_2: "",
        f4: "",
        f5: "",
        f6: "",
        f7: "",
        f8: "",
        f9: "",
      },
      step2: {
        f10: "",
        f11: "",
        f12: "",
        f13: "",
        f14: "",
      },
      step3: {
        f15: "",
        f16: "",
        f17: "",
        f18: "",
        f19: "",
      },
      step4: {
        f20: "",
        f21: "",
        f22: "",
        f23: "",
        f24: "",
        f25: "",
        f26: "",
        f27: "",
        f28: "",
        f29: "",
        f30: "",
        f31: "",
        f32: "",
        f33: "",
        f34: "",
        f35: "",
        f36: "",
      },
      step5: {
        f37: "",
        f38: "",
        f39: "",
        f40: "",
        f41: "",
        f42: "",
        f43: "",
        f44: "",
        f45: "",
        f46: "",
        f47: "",
        f48: "",
        f49: "",
        f50: "",
        f51: "",
        f52: "",
        f53: "",
        f54: "",
        f55: "",
        f56: "",
        f57: "",
        f58: "",
        f59: "",
        f60: "",
      },
      step6: {
        f61: "",
        f62: "",
        f63: "",
        f64: "",
        f65: "",
        f66: "",
        f67: "",
        f68: "",
        f69: "",
        f70: "",
        f71: "",
        f72: "",
        f73: "",
        f74: "",
        f75: "",
        f76: "",
        f77: "",
        f78: "",
        f79: "",
        f80: "",
        f81: "",
        f82: "",
        f83: "",
        f84: "",
        f85: "",
        f86: "",
        f88: "",
        f89: "",
        f90: "",
        f91: "",
        f92: "",
        f93: "",
        f94: "",
        f95: "",
        f96: "",
        f97: "",
        f98: "",
      },
      step7: {
        f99: "",
        f100: "",
        f101: "",
        f102: "",
        f103: "",
        f104: "",
        f105: "",
        f106_1: "",
        f106_2: "",
        f107_1: "",
        f107_2: "",
        f107_3: "",
        f108: "",
        f109: "",
      },
      step8: {
        f110: "",
        f111_1: "",
        f112_1: "",
        f113_1: "",
        f111_2: "",
        f112_2: "",
        f113_2: "",
      },
    },
    household_id: 0,
    status: "warning",
  },
  reducers: {
    changeMember(state, action) {
      const { name, value, step } = action.payload;
      if (typeof name === "object") {
        for (let n of name) {
          state.data[step][n] = value;
        }
      } else {
        state.data[step][name] = value;
      }
    },
    clearStepMemberData(state, action) {
      const step = action.payload;
      Object.keys(state.data[step]).forEach(
        (index) => (state.data[step][index] = "")
      );
    },
    clearAllMemberData(state) {
      Object.keys(state.data).forEach((index1) =>
        Object.keys(state.data[index1]).forEach(
          (index2) => (state.data[index1][index2] = "")
        )
      );
    },
  },
});

export const { changeMember, clearStepMemberData, clearAllMemberData } =
  memberSlice.actions;
export const memberReducer = memberSlice.reducer;
