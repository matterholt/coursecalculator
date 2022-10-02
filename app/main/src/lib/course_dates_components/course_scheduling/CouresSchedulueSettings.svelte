<script>
</script>

<fieldset>
  <legend>Method of scheduling</legend>
  <div>
    <input
      type="radio"
      id="semesters"
      name="method_course_cal"
      value="semesters"
      checked
    />
    <label for="semesters">Semesters</label>
  </div>

  <div>
    <input
      type="radio"
      id="quarterly"
      name="method_course_cal"
      value="quarterly"
    />
    <label for="quarterly">Quarterly</label>
  </div>

  <div>
    <input type="radio" id="custom" name="method_course_cal" value="custom" />
    <label for="custom">Custom</label>
  </div>
</fieldset>

<style>
  fieldset {
    display: flex;
  }
  div {
    width: 150px;
  }
</style>
