import _ from "lodash";

export function paginate(foods, pageNumber, pageSize) {
    const startingIndex = (pageNumber - 1) * pageSize;
    return _(foods).slice(startingIndex).take(pageSize).value();
}
