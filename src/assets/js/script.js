function toggleFunc() {
  $(document).ready(function () {
    $(".footer-links-wrapper div h3").click(function () {
      if ($(window).width() <= 768) {
        let footerLinks = $(".footer-links-wrapper .col ul");

        footerLinks.slideToggle();

        $(".footer-links-wrapper div h3").toggleClass("expanded");
      }
    });
  });
}

export default toggleFunc;
