import React, {Component} from 'react';

export default class Basic extends Component {
  renderSeprator() {
    return (
      <div>코드를 분리합시다</div>
    );
  }

  render() {
    return (
      <div>
       <span>저는 컴포넌트입니다.</span>
       <span>독립 만세!!!</span>
       <span>재사용 만세!!!</span>
       {this.renderSeprator()}
      </div>
    );
  }
}

// 1. 사용자 경험
// 2. 재사용 콤포넌트
// 3. 화면과 데이터의 일치
