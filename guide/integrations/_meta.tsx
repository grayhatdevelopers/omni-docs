import guides from "../../../data/guide"

const guideObj = guides.map(guide => ({
    id: guide.id,
    title: guide.type + " " + guide.name + ` (${guide.status === 'inactive' ? "Coming soon" : guide.status})` 
})).reduce((acc, obj) => {
    acc[obj.id] = obj;
    return acc;
  }, {});

export default {
    ...guideObj
}