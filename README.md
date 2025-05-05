# Features added

## 1. Access control

**Pros:**

- granualar control: collection level, field level,

**Cons:**

- no centralized place to group or batch manage certain collections or blocks

# General pros

## 1. Auto generated payload-types

# General cons

### Complexity in buiding custom CMS field & block
If you want to add a custom field to a collection, the things you need to consider:
- does this field contain multiple fields
- if so, how do they interact with each other
- often times, you need to add a client component for the custom field
- and you need to pass value between the server component and the client component
- you need to mind the import process very carefully: add custom field to collection; swap in client component path, generating importMap

### Complexity in rendering custom CMS fields and blocks
- blocks let editors enjoy great freedom to add whatever content they want in whatever order they want
- the layout they get in pages collection is infinitely close to the app layout once rendered
- however, that conveniece comes at the price that FE developers need to orchestrate Nextjs components that both receive data well and render data to match design in a reusable, extensible way. 
- it's like building customs skins for various Lego blocks, each needs to fit the edges, and needs to be convenient to update the skin


# Challenges

- requires deeper collaboration of FE and BE team, since BE will need to think of data structures in a UI perspective (which parts of data should I decouple so FE can easily fetch only what they need and nothing more?) FE will also need to think of UI in a data structure way. For example, looking at a new page design or a new feature, do we need new fields in CMS, or can we use exising CMS blocks or collection and to create a FE component

- concept challenge: group vs block
  Groups: Always present, cannot be added/removed by editors
  Blocks: Editors choose which blocks to add and in what order
  Groups: Stored as a nested object within a document
  Blocks: Stored as an array of objects, each with a type identifier

# Nice to have
- add custom field header, to allow editor to choose from h1 to h6 for headings, and set h1 and h6 sizes to match our design system