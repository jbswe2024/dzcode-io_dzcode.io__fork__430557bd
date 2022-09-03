import { Document } from "@dzcode.io/api/dist/app/types/legacy";
import { Action } from "src/redux";
import { updateCollection } from "src/utils";

export interface DocumentationState {
  list: Document[];
}

export const documentation = (
  state: DocumentationState = {
    list: [],
  },
  action: Action<DocumentationState>,
) => {
  switch (action.type) {
    case "UPDATE_DOCUMENTATION":
      return {
        ...state,
        list: updateCollection<Document>(state.list, action.payload.list || [], "slug"),
      };
    default:
      return state;
  }
};