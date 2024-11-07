// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registrationForm');
  const submitButton = form.querySelector('.btn-submit');
  let formValid = false;

  // Validation patterns
  const patterns = {
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    name: /^[a-zA-Z\s]{2,}$/,
  };

  // Error messages
  const errorMessages = {
    name: {
      required: 'Please enter your full name',
      invalid: 'Name should contain only letters and spaces',
    },
    email: {
      required: 'Please enter your email address',
      invalid: 'Please enter a valid email address',
    },
    password: {
      required: 'Please enter a password',
      weak: 'Password must be at least 8 characters long and include numbers, letters, and special characters',
    },
  };

  // Form data object to store values
  let formData = {
    name: '',
    email: '',
    password: '',
  };

  // Validate individual field and update formData
  const validateField = (field) => {
    const fieldType = field.id;
    const value = field.value.trim();
    const errorElement = document.getElementById(`${fieldType}Error`);
    let isValid = true;

    // Update formData
    formData[fieldType] = value;

    // Reset previous validation state
    field.classList.remove('valid', 'invalid');
    errorElement.style.display = 'none';

    // Required field validation
    if (!value) {
      showError(field, errorElement, errorMessages[fieldType].required);
      isValid = false;
    }
    // Pattern validation for name and email
    else if (patterns[fieldType] && !patterns[fieldType].test(value)) {
      showError(field, errorElement, errorMessages[fieldType].invalid);
      isValid = false;
    }
    // Password strength validation
    else if (fieldType === 'password') {
      const strength = checkPasswordStrength(value);
      if (strength === 'weak') {
        showError(field, errorElement, errorMessages.password.weak);
        isValid = false;
      }
    }

    if (isValid) {
      field.classList.add('valid');
    }

    updateSubmitButton();
    return isValid;
  };

  // Show error message
  const showError = (field, errorElement, message) => {
    field.classList.add('invalid');
    errorElement.textContent = message;
    errorElement.style.display = 'block';
  };

  // Check password strength
  const checkPasswordStrength = (password) => {
    const strengthElement = document.getElementById('passwordStrength');
    const hasNumber = /\d/.test(password);
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const isLongEnough = password.length >= 8;

    let strength = 'weak';
    let message = '';

    if (isLongEnough && hasNumber && hasLetter && hasSpecial) {
      strength = 'strong';
      message = 'Strong password';
    } else if (
      isLongEnough &&
      ((hasNumber && hasLetter) ||
        (hasLetter && hasSpecial) ||
        (hasNumber && hasSpecial))
    ) {
      strength = 'medium';
      message = 'Medium strength - add more variety';
    } else {
      message = 'Weak password';
    }

    strengthElement.textContent = message;
    strengthElement.className = `password-strength strength-${strength}`;

    return strength;
  };

  // Update submit button state
  const updateSubmitButton = () => {
    const fields = form.querySelectorAll('.form-control');
    formValid = Array.from(fields).every((field) =>
      field.classList.contains('valid')
    );
    submitButton.disabled = !formValid;
  };

  // Add event listeners to form fields
  form.querySelectorAll('.form-control').forEach((field) => {
    field.addEventListener('input', (e) => {
      formData[e.target.id] = e.target.value.trim();
      validateField(e.target);
    });

    field.addEventListener('blur', (e) => {
      validateField(e.target);
    });
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const isValid = Array.from(form.querySelectorAll('.form-control')).every(
      (field) => {
        return validateField(field);
      }
    );

    if (!isValid) {
      console.log('Form validation failed');
      return;
    }

    try {
      console.log('Form submitted successfully:', formData);
      alert('Registration successful!');

      // Reset form and formData
      form.reset();
      formData = {
        name: '',
        email: '',
        password: '',
      };

      // Reset validation states
      form.querySelectorAll('.form-control').forEach((field) => {
        field.classList.remove('valid', 'invalid');
      });
      document.getElementById('passwordStrength').textContent = '';
      submitButton.disabled = true;
    } catch (error) {
      console.error('Submission error:', error);
      alert('An error occurred. Please try again.');
    }
  });
});
