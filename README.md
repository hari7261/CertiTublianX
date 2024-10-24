# 8020 Certificate Generator

A React-based automated certificate generator developed by the TublianX web development team. This application allows for dynamic generation of professional, futuristic-looking certificates with customizable fields and PDF export capabilities.

## 🚀 Features

- **Dynamic Certificate Generation**: Create personalized certificates with custom fields
- **Modern UI/UX**: Futuristic design with glassmorphism effects and gradients
- **PDF Export**: Download generated certificates as PDF files
- **Responsive Design**: Works seamlessly across different screen sizes
- **Real-time Preview**: See certificate changes as you type
- **Edit Capability**: Modify certificate details after generation

## 📋 Requirements

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)
- Modern web browser with JavaScript enabled

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/TublianX/8020-certificate-generator.git
cd 8020-certificate-generator
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## 💻 Usage

1. **Input Certificate Details**:
   - Recipient Name
   - Certificate ID
   - Description
   - Date

2. **Generate Certificate**:
   - Click "Generate Certificate" to create the certificate
   - Preview the generated certificate
   - Use the "Edit" button to make changes if needed

3. **Download Certificate**:
   - Click "Download PDF" to save the certificate as a PDF file
   - The PDF will maintain the same styling and layout as the preview

## 🔧 Project Structure

```
8020-certificate-generator/
├── src/
│   ├── App.js          # Main application component
│   ├── App.css         # Styles for the certificate and form
│   ├── index.js        # Application entry point
│   └── index.css       # Global styles
├── public/
│   └── index.html      # HTML template
├── package.json        # Project dependencies and scripts
└── README.md          # Project documentation
```

## 🎨 Customization

### Modifying Certificate Design

The certificate design can be customized by editing the CSS in `App.css`:

- Background gradients: Modify the `linear-gradient` values
- Colors: Update color variables and gradient values
- Typography: Adjust font sizes and families
- Layout: Modify padding, margins, and grid settings

### Adding New Fields

To add new certificate fields:

1. Update the `formData` state in `App.js`:
```javascript
const [formData, setFormData] = useState({
  name: '',
  certificateId: '',
  description: '',
  date: '',
  newField: '' // Add your new field here
});
```

2. Add corresponding form inputs and certificate display elements

## 📝 Development Notes

### Best Practices

- Keep component state minimal and organized
- Use semantic HTML elements
- Follow React best practices for state management
- Maintain consistent code formatting
- Add comments for complex logic

### Future Enhancements

- [ ] Add template selection options
- [ ] Implement image upload for logos
- [ ] Add certificate validation system
- [ ] Create bulk certificate generation
- [ ] Add certificate tracking system

## 🔍 Testing

Run the test suite:
```bash
npm test
```

Key test areas:
- Form validation
- Certificate generation
- PDF export functionality
- Responsive design

## 📦 Deployment

1. Build the production version:
```bash
npm run build
```

2. Deploy the contents of the `build` folder to your hosting service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📄 License

This project is proprietary and confidential. Unauthorized copying or distribution is prohibited.

## 👥 

- TublianX Web Development 


---

Developed with ❤️ by TublianX Web Development Team for 8020
