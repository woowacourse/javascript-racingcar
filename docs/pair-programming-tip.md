## 페어 프로그래밍 코드 동기화 하는 방법

- 우선 니야와 호이초이는 woowacourse/javascript-racingcar 에서 fork를 따서 각자 step-1 브랜치를 생성한다.
- 니야 로컬에서 live share를 통해 페어 프로그래밍을 진행한다.
- 호이초이는 본인 로컬에서 본인이 fork 딴 레포를 clone 한다.
- 니야 레포 URL을 복사하여 호이초이의 로컬 환경에서 remote 한다.
  ```bash
  git remote add sooyeoniya https://github.com/sooyeoniya/javascript-racingcar.git
  ```
- 니야의 step-1 브랜치에서 작업한 최신 커밋 내용을 가져온다. fetch를 하면 최신 커밋을 호이초이의 로컬에서 참조할 수 있다.
  ```bash
  git fetch sooyeoniya step-1
  ```
- 호이초이의 step-1 브랜치에서 rebase를 통해 최신 커밋 내용을 코드에 반영한다.
  ```bash
  git rebase sooyeoniya/step-1
  ```
  - ⚠ 충돌이 발생하면 해결 후 `git rebase --continue`를 실행해야 한다.
  - ⚠ 만약 충돌 해결이 어렵다면 `git rebase --abort` 로 되돌릴 수 있다.
  - ⚠ 강제로 모든 내용을 100% 동일하게 옮기려면 `git reset --hard sooyeoniya/step-1`을 사용하면 된다.

## 커밋 시 공동 기여자 설정 방법

```bash
git commit -m "feat: xxxx
>
>
> Co-authored-by: hoyyChoi <hoyyChoi@users.noreply.github.com>
> "
```
