import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import '../assets/scss/_03-Componentes/_MainCalendarioPagos.scss';
import { FaCheckCircle, FaCalendarAlt, FaListUl } from 'react-icons/fa';

// Datos de ejemplo para pagos
const samplePayments = [
  {
    id: 1,
    nombre: "Alquiler",
    monto: 50000,
    fecha: "2023-11-05",
    categoria: "Vivienda",
    pagado: false
  },
  {
    id: 2,
    nombre: "Luz",
    monto: 8500,
    fecha: "2023-11-10",
    categoria: "Servicios",
    pagado: false
  },
  {
    id: 3,
    nombre: "Internet",
    monto: 4500,
    fecha: "2023-11-15",
    categoria: "Servicios",
    pagado: false
  },
  {
    id: 4,
    nombre: "Gimnasio",
    monto: 3500,
    fecha: "2023-11-20",
    categoria: "Salud",
    pagado: false
  },
  {
    id: 5,
    nombre: "Supermercado",
    monto: 12000,
    fecha: "2023-12-01",
    categoria: "Alimentos",
    pagado: false
  }
];

const MainCalendarioPagos = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [reminders, setReminders] = useState({});
  const [payments, setPayments] = useState(samplePayments);
  const [view, setView] = useState('list'); // 'list' o 'calendar'
  const [selectedPayment, setSelectedPayment] = useState(null);

  // Ordenar pagos por fecha más cercana
  const sortedPayments = [...payments].sort((a, b) => 
    new Date(a.fecha) - new Date(b.fecha)
  );

  // Filtrar próximos vencimientos (7 días)
  const upcomingPayments = sortedPayments.filter(payment => {
    const paymentDate = new Date(payment.fecha);
    const daysDiff = Math.floor((paymentDate - today) / (1000 * 60 * 60 * 24));
    return daysDiff <= 7 && daysDiff >= 0 && !payment.pagado;
  });

  const handlePrevMonth = () => {
    setCurrentMonth(prev => prev === 0 ? 11 : prev - 1);
    if (currentMonth === 0) setCurrentYear(prev => prev - 1);
  };

  const handleNextMonth = () => {
    setCurrentMonth(prev => prev === 11 ? 0 : prev + 1);
    if (currentMonth === 11) setCurrentYear(prev => prev + 1);
  };

  const handlePaymentClick = (payment) => {
    setSelectedPayment(payment);
    Swal.fire({
      title: `Pago: ${payment.nombre}`,
      html: `
        <p><strong>Monto:</strong> $${payment.monto}</p>
        <p><strong>Vencimiento:</strong> ${new Date(payment.fecha).toLocaleDateString()}</p>
        <p><strong>Categoría:</strong> ${payment.categoria}</p>
      `,
      showCancelButton: true,
      confirmButtonText: 'Marcar como pagado',
      cancelButtonText: 'Cerrar'
    }).then((result) => {
      if (result.isConfirmed) {
        setPayments(prev => prev.map(p => 
          p.id === payment.id ? {...p, pagado: true} : p
        ));
        Swal.fire('¡Pago registrado!', '', 'success');
      }
    });
  };

  const renderPaymentItem = (payment) => (
    <div 
      key={payment.id} 
      className={`payment-item ${payment.pagado ? 'paid' : ''}`}
      onClick={() => handlePaymentClick(payment)}
    >
      <div className="payment-date">
        {new Date(payment.fecha).toLocaleDateString('es-ES', { day: '2-digit', month: 'short' })}
      </div>
      <div className="payment-info">
        <div className="payment-name">{payment.nombre}</div>
        <div className="payment-category">{payment.categoria}</div>
      </div>
      <div className="payment-amount">
        ${payment.monto.toLocaleString('es-AR')}
        {payment.pagado && <FaCheckCircle className="paid-icon" />}
      </div>
    </div>
  );

  const renderCalendar = () => {
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const days = [];
    
    for (let day = 1; day <= daysInMonth; day++) {
      const dateKey = `${currentYear}-${currentMonth + 1}-${day}`;
      const dayPayments = payments.filter(p => p.fecha === dateKey);
      
      days.push(
        <div 
          key={day}
          className={`calendar-day ${dayPayments.length > 0 ? 'has-payment' : ''}`}
          onClick={() => dayPayments.length > 0 && handlePaymentClick(dayPayments[0])}
        >
          <span className="day-number">{day}</span>
          {dayPayments.length > 0 && (
            <div className="payment-indicator">
              {dayPayments.length} pago{dayPayments.length > 1 ? 's' : ''}
            </div>
          )}
        </div>
      );
    }
    
    return days;
  };

  const monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  return (
    <div className="payments-container">
      {/* Sección de próximos vencimientos */}
      <div className="upcoming-payments">
        <h2><FaCheckCircle /> Próximos vencimientos</h2>
        {upcomingPayments.length > 0 ? (
          upcomingPayments.map(renderPaymentItem)
        ) : (
          <p className="no-payments">No hay pagos próximos en los próximos 7 días</p>
        )}
      </div>

      {/* Selector de vista */}
      <div className="view-selector">
        <button 
          className={view === 'list' ? 'active' : ''}
          onClick={() => setView('list')}
        >
          <FaListUl /> Lista completa
        </button>
        <button 
          className={view === 'calendar' ? 'active' : ''}
          onClick={() => setView('calendar')}
        >
          <FaCalendarAlt /> Calendario
        </button>
      </div>

      {/* Vista seleccionada */}
      {view === 'list' ? (
        <div className="all-payments">
          <h2>Todos los pagos</h2>
          {sortedPayments.map(renderPaymentItem)}
        </div>
      ) : (
        <div className="calendar-view">
          <div className="calendar-header">
            <button onClick={handlePrevMonth}>&lt;</button>
            <h2>{monthNames[currentMonth]} {currentYear}</h2>
            <button onClick={handleNextMonth}>&gt;</button>
          </div>
          <div className="calendar-grid">
            {renderCalendar()}
          </div>
        </div>
      )}
    </div>
  );
};

export default MainCalendarioPagos;