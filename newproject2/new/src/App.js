
import './App.css';
import Class_nguyenquangmanh from './Class_nguyenquangmanh';
import Fun_jsx_nguyenquangmanh from './Fun_jsx_nguyenquangmanh';

function App() {
  return (
   <section classname="app">
<h1>demo jsx</h1>
{/*function Component new   */}
<Fun_jsx_nguyenquangmanh  />
<Fun_jsx_nguyenquangmanh   fullname="nguyen quang manh" age="20"/>

<Class_nguyenquangmanh/>
<hr/>
<Class_nguyenquangmanh info="Hoc reactJS" time="11buoi" />
   </section>
  );
}

export default App;
