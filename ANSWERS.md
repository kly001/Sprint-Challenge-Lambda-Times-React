1. What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.
PropTypes ae used to help the developer find bugs in code before they become a problem.  
    Reasons it is important:
        * catches most runtime errors before production.
        * easier to idetify data structure of each variable.
        * reduces 'cognitive load'; one less detail to remember.
        * helps when more than one person is working on a project.  Makes it easier to understand what is going on.

-------------------------------------------------------------------------------------------

2. Describe a life-cycle event in React.
Lifecycle events  describes methods that may be used on components.  React provides these methods (or hooks) that get called automatically at each point in the lifecycle and give you control of what happens at the point it is invoked. 

--------------------------------------------------------------------------------------------

3. Explain the details of a Higher Order Component.
A Higher Order Component(HOC) is an advanced technique in React for reusing component logic.  They share the same functionality across multiple components.

--------------------------------------------------------------------------------------------

4.  What are three different ways to style components in React? Explain some of the benefits of each.

1.  CSS Stylesheet: separate css files for each component; good for more complex applications.

2.  Inline Styling: style applied directly to the element; good for adding just a few style         properties.

3.  Styled-Components: library for React adn React Native; allows you to use component-level styles that are written with a mixture of JavaScript and CSS.