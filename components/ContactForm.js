var ContactForm = React.createClass({
    propTypes: {
        contact: React.PropTypes.object.isRequired
    },
  
    render: function() {
        return (
            React.createElement('form', {className: 'contactForm'},
                React.createElement('label', {
                    htmlFor: 'firstName',
                }, 'First Name'),
                React.createElement('input', {
                    type: 'text',
                    id: 'firstName',
                    value: this.props.contact.firstName,
                }),
                React.createElement('label', {
                    htmlFor: 'lastName',
                }, 'Last Name'),
                React.createElement('input', {
                    type: 'text',
                    id: 'lastName',
                    value: this.props.contact.lastName,
                }),
                React.createElement('label', {
                    htmlFor: 'email',
                }, 'Email'),
                React.createElement('input', {
                    type: 'email',
                    id: 'email',
                    value: this.props.contact.email,
                }),
                React.createElement('button', {
                    type: 'submit'
                }, "Dodaj kontakt")
            )
        )
    }
})