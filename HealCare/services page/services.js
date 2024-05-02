document.addEventListener('DOMContentLoaded', () => {
    const table = document.getElementById('servicesTable');
    const serviceInfo = document.getElementById('serviceInfo');
  
    table.addEventListener('click', (event) => {
      const targetCell = event.target;
      let info = '';
  
      // Check if the clicked cell is in the "Service" column (index 0)
      if (targetCell.tagName === 'TD' && targetCell.cellIndex === 0) {
        const service = targetCell.textContent;
  
        // Add information for each service
        switch (service) {
          case 'Cardiologist':
            info = 'Cardiologists specialize in diagnosing and treating heart conditions.';
            break;
          case 'Dermatologist':
            info = 'Dermatologists focus on treating skin, hair, and nail disorders.';
            break;
          case 'Pediatrician':
            info = 'Pediatricians provide medical care for infants, children, and adolescents.';
            break;
          case 'Orthopedic Surgeon':
            info = 'Orthopedic surgeons specialize in treating musculoskeletal injuries and conditions.';
            break;
          case 'Neurologist':
            info = 'Neurologists diagnose and treat disorders of the nervous system, including the brain and spinal cord.';
            break;
          case 'Psychiatrist':
            info = 'Psychiatrists specialize in mental health disorders and provide therapy and medication management.';
            break;
          case 'Oncologist':
            info = 'Oncologists are doctors who specialize in the diagnosis and treatment of cancer.';
            break;
          case 'Gynecologist':
            info = 'Gynecologists focus on women\'s reproductive health, including pregnancy, childbirth, and menopause.';
            break;
          case 'Endocrinologist':
            info = 'Endocrinologists specialize in disorders of the endocrine system, including diabetes and thyroid disorders.';
            break;
          case 'Dentist':
            info = 'Dentists provide oral health care services, including check-ups, cleanings, and treatments for dental issues.';
            break;
          default:
            info = 'Additional information about this service is not available.';
        }
      } else if (targetCell.tagName === 'TD' && targetCell.cellIndex === 1) {
        const doctor = targetCell.textContent;
  
        // Add information for each doctor
        switch (doctor) {
          case 'Dr. John Doe':
            info = 'Dr. John Doe is a highly experienced cardiologist specializing in heart conditions.';
            break;
          case 'Dr. Jane Smith':
            info = 'Dr. Jane Smith is a renowned dermatologist known for her expertise in skin disorders.';
            break;
          case 'Dr. Michael Johnson':
            info = 'Dr. Michael Johnson is a compassionate pediatrician dedicated to children\'s health.';
            break;
          case 'Dr. Emily Davis':
            info = 'Dr. Emily Davis is an expert orthopedic surgeon specializing in musculoskeletal conditions and surgeries.';
            break;
          case 'Dr. David Wilson':
            info = 'Dr. David Wilson is a skilled neurologist focusing on disorders of the nervous system, including the brain and spinal cord.';
            break;
          case 'Dr. Sarah Brown':
            info = 'Dr. Sarah Brown is a compassionate psychiatrist providing mental health care and therapy.';
            break;
          case 'Dr. Daniel Martinez':
            info = 'Dr. Daniel Martinez is an oncologist specializing in the diagnosis and treatment of cancer.';
            break;
          case 'Dr. Laura Thompson':
            info = 'Dr. Laura Thompson is a dedicated gynecologist providing women\'s health care services.';
            break;
          case 'Dr. Christopher Lee':
            info = 'Dr. Christopher Lee is an endocrinologist specializing in disorders of the endocrine system, including diabetes and thyroid disorders.';
            break;
          case 'Dr. Amanda White':
            info = 'Dr. Amanda White is a skilled dentist providing comprehensive dental care services.';
            break;
          default:
            info = 'Additional information about this doctor is not available.';
        }
      }
  
      // Display the information below the table
      serviceInfo.innerHTML = `<p>${info}</p>`;
    });
  });
  
  
  