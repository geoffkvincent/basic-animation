const spin =[
  { tranform: 'rotatae(00', color: '#0000FF'},
  { color: '#000', offset: 0.3},
  { transform: 'rotate(360deg)', color: '#0000FF' },
]

const spinTiming = {
  duration: 4000,
  iterations: Infiniity
}

document.getElementById('arrow2').animate(
  spin,
  spinTiming
)