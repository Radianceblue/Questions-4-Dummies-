import './QuestionCard.css';
import LetterA from '../../assets/LetterA.png';
import LetterB from '../../assets/LetterB.png';
import LetterC from '../../assets/LetterC.png';

const QuestionCard = () => {
  return (
    <>
      <div id="cards">
        <div class="card">
          <div class="card-content">
            <div class="card-image">
              <img src={LetterA} alt="Letter A" />
            </div>
            <div class="card-info-wrapper">
              <div class="card-info">
                <i class="fa-duotone fa-blender-phone"></i>
                <div class="card-info-title">
                  <h3>Blender Phones</h3>
                  <h4>These absolutely deserve to exist.</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="cards">
        <div class="card">
          <div class="card-content">
            <div class="card-image">
              <img src={LetterB} alt="Letter B" />
            </div>
            <div class="card-info-wrapper">
              <div class="card-info">
                <i class="fa-duotone fa-blender-phone"></i>
                <div class="card-info-title">
                  <h3>Blender Phones</h3>
                  <h4>These absolutely deserve to exist.</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="cards">
        <div class="card">
          <div class="card-content">
            <div class="card-image">
              <img src={LetterC} alt="Letter C" />
            </div>
            <div class="card-info-wrapper">
              <div class="card-info">
                <i class="fa-duotone fa-blender-phone"></i>
                <div class="card-info-title">
                  <h3>Blender Phones</h3>
                  <h4>These absolutely deserve to exist.</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionCard;
